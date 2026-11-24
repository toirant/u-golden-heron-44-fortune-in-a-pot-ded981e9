# Fortune in a Pot

[![make.fun](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/toirant/u-golden-heron-44-fortune-in-a-pot-ded981e9/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/toirant/u-golden-heron-44-fortune-in-a-pot-ded981e9/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9)

Entry for the [make.fun bounty "Fortune in a Pot"](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9).

## The fortune

> By spring you will outgrow this pot, and your keeper will beam as if she planned it all along.

94 characters, one line. It is a fortune for a houseplant on the
windowsill, told as a prediction ("By spring you will..."): the plant
outgrows its pot, and the keeper takes quiet, beaming credit for it.
Kind, funny in a way a plant lover recognises, with no doom, no
withering, and no mockery — and specific to this plant, its pot, and
its keeper, not any plant in any room.

## How it works

Run it exactly as the grader does:

```sh
node main.ts
```

`main.ts` validates the fortune against the gate (UTF-8 text, 1–120
characters, one line, not only white space), creates `/output` if it
is missing, clears only the files inside it, writes `entry.txt`, and
reads the file back to confirm it matches byte for byte.
