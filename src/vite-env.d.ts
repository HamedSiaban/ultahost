declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.css";

/// <reference types="vite/client" />

declare const __APP_VERSION__: string;
interface ImportMetaEnv {
  readonly VITE_APP_FALLBACK_BASE_URL?: string;
  readonly VITE_APP_RESTRICTED_URL?: string;
  readonly VITE_APP_PUBLIC_URL?: string;
  readonly VITE_APP_LOCAL_STORAGE_AUTH?: string;
  readonly VITE_APP_LOCAL_STORAGE_THEME?: string;
  readonly VITE_APP_LOCAL_STORAGE_LANGUAGE?: string;
  readonly VITE_APP_LOCAL_STORAGE_MAIN_CONFIG?: string;
  readonly VITE_APP_LOCAL_STORAGE_TASK_QUEUE_STORE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
