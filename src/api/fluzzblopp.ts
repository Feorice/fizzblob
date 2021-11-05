enum FluzzBloppResp {
    FluzzBlopp = 'FluzzBlopp',
    Fluzz = 'Fluzz',
    Blopp = 'Blopp'
}

export function* fluzzBloppGenerator(
  start = 1,
  end = 100
): Generator<number | keyof typeof FluzzBloppResp, void, unknown> {
  for (let i = start; i <= end; i++) {
    const t = i % 3 == 0,
      f = i % 5 == 0;
    yield t && f ? FluzzBloppResp.FluzzBlopp : t ? FluzzBloppResp.Fluzz : f ? FluzzBloppResp.Blopp : i;
  }
}
