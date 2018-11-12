import {$ifelse} from "../src";
import {$trycatch} from "../src";

it("$ifelse", () => {

  const query = JSON.parse(`{"params":{"name":"foo"}}`);

  const foo = $ifelse(query.params && query.params.name, name => name.toUpperCase(), _ => "_");
  const bar = $ifelse(query.params && query.params.age, name => name.toUpperCase(), _ => "_");

  expect(foo).toBe("FOO");
  expect(bar).toBe("_");
});

it("$trycatch", () => {

  const fnThatMayThrowException = (n: number) => {
    if (n % 2 === 0) {
      return n * 2;
    } else {
      throw new Error("bad luck");
    }
  };

  const success = $trycatch(() => fnThatMayThrowException(2), e => 0);
  const failure = $trycatch(() => fnThatMayThrowException(1), e => 0);

  expect(success).toBe(4);
  expect(failure).toBe(0);
});
