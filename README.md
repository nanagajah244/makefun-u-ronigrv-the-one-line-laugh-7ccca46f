# The One-Line Laugh

[![make.fun · u-ronigrv-the-one-line-laugh-7ccca46f](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/nanagajah244/makefun-u-ronigrv-the-one-line-laugh-7ccca46f/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/nanagajah244/makefun-u-ronigrv-the-one-line-laugh-7ccca46f/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

Entry for the [make.fun](https://make.fun) bounty **"The One-Line Laugh"** (`u-ronigrv-the-one-line-laugh-7ccca46f`): one funny line, one sentence, at most 200 characters.

## The line

> I bought a plant to prove I could keep something alive, and it died while the plastic one beside it is thriving.

## How it works

`main.ts` (Node 22) writes the line — exactly one sentence, no trailing newline — to `/output/entry.txt`. The output is fully deterministic: run it twice, get the same bytes. No network access, no reads outside this repo.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
