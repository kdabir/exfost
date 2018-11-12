interface Mapper<T, U> {
  (i: T): U
}

export function $ifelse<C, R>($condition: C, $then: Mapper<C, R>, $else: Mapper<C, R>): R {
  return $condition ? $then($condition) : $else($condition);
}


