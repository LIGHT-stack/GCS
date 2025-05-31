import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type UserRole = 'member' | 'admin' | 'guest';
export type Theme = 'light' | 'dark' | 'system';

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  preferences?: {
    notifications: boolean;
    emailUpdates: boolean;
  };
}

interface Event {
  id: string;
  name: string;
  date: Date;
  endDate: Date;
  location: string;
  description: string;
  type: string;
  isRegistered: boolean;
}

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  theme: Theme;
  isLoading: boolean;
  error: string | null;
  
  // Events state
  events: Event[];
  registeredEvents: string[];
  favoriteEvents: string[];
  
  // UI state
  sidebarOpen: boolean;
  notifications: {
    id: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    read: boolean;
  }[];

  // Actions
  setUser: (user: User | null) => void;
  setTheme: (theme: Theme) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  toggleSidebar: () => void;
  addNotification: (message: string, type: 'info' | 'success' | 'warning' | 'error') => void;
  markNotificationAsRead: (id: string) => void;
  clearNotifications: () => void;
  registerForEvent: (eventId: string) => void;
  unregisterFromEvent: (eventId: string) => void;
  toggleFavoriteEvent: (eventId: string) => void;
  updateUserPreferences: (preferences: Partial<User['preferences']>) => void;
}

export const useStore = create<AppState>()(
  persist(
    immer((set) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      theme: 'system',
      isLoading: false,
      error: null,
      events: [],
      registeredEvents: [],
      favoriteEvents: [],
      sidebarOpen: false,
      notifications: [],

      // Actions
      setUser: (user) => set((state) => {
        state.user = user;
        state.isAuthenticated = !!user;
      }),

      setTheme: (theme) => set((state) => {
        state.theme = theme;
      }),

      setLoading: (isLoading) => set((state) => {
        state.isLoading = isLoading;
      }),

      setError: (error) => set((state) => {
        state.error = error;
      }),

      toggleSidebar: () => set((state) => {
        state.sidebarOpen = !state.sidebarOpen;
      }),

      addNotification: (message, type) => set((state) => {
        state.notifications.push({
          id: Date.now().toString(),
          message,
          type,
          read: false,
        });
      }),

      markNotificationAsRead: (id) => set((state) => {
        const notification = state.notifications.find(n => n.id === id);
        if (notification) {
          notification.read = true;
        }
      }),

      clearNotifications: () => set((state) => {
        state.notifications = [];
      }),

      registerForEvent: (eventId) => set((state) => {
        if (!state.registeredEvents.includes(eventId)) {
          state.registeredEvents.push(eventId);
        }
      }),

      unregisterFromEvent: (eventId) => set((state) => {
        state.registeredEvents = state.registeredEvents.filter(id => id !== eventId);
      }),

      toggleFavoriteEvent: (eventId) => set((state) => {
        const index = state.favoriteEvents.indexOf(eventId);
        if (index === -1) {
          state.favoriteEvents.push(eventId);
        } else {
          state.favoriteEvents.splice(index, 1);
        }
      }),

      updateUserPreferences: (preferences) => set((state) => {
        if (state.user) {
          state.user.preferences = {
            ...state.user.preferences,
            ...preferences,
          };
        }
      }),
    })),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        theme: state.theme,
        registeredEvents: state.registeredEvents,
        favoriteEvents: state.favoriteEvents,
      }),
    }
  )
); 