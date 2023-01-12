export interface IUseFormManager {
  sumbit: (data: Record<string, boolean | string | number>) => void;
  error: Record<"input", string>;
}
