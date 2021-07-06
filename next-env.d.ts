/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/image-types/global" />

declare global {
  type Func<R = void> = () => R;

  type Func<P, R> = (arg: P) => R;

  type React$Node = ReactNode;
}
