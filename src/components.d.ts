import Calendar from 'primevue/calendar'

declare module 'vue' {
  export interface GlobalComponents {
    'app-calendar': typeof Calendar
  }
}
