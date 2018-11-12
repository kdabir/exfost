interface Mapper<T, U> {
  (i: T): U
}

interface Generator<T> {
  (): T
}


export function $ifelse<C, R>($condition: C, $then: Mapper<C, R>, $else: Mapper<C, R>): R {
  return $condition ? $then($condition) : $else($condition);
}

export function $trycatch<T, E>($try: Generator<T>, $catch: Mapper<E, T>) {
  try {
    return $try()
  } catch (e) {
    return $catch(e);
  }
}
