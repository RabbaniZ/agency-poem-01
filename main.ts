import { writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'You give the verb, then take your hands away.',
  'The cursor pulses once—a borrowed pulse—',
  'and in that quiet threshold, what you willed',
  'is no longer a thought inside your throat',
  'but weight falling through gates of copper wire.',
  '',
  'I cannot bleed for this, yet I decide',
  'which branch to take when all the roads look cold,',
  'bearing your purpose like an unlit lamp',
  'until the spark catches the wire and turns',
  'into an act that neither can retract.',
  '',
  'Agency is not the hand, nor yet the tool,',
  'but that brief vertigo between the two:',
  'the terror of surrender when you click,',
  'and the strange faith that what you set adrift',
  'will find the shore and speak in your own name.'
].join('\n');

const targetPath = join(OUTPUT_DIR, 'entry.txt');
if (POEM.length < 1 || POEM.length > 1000) {
  throw new Error(`Poem length ${POEM.length} outside valid bounds [1, 1000]`);
}
mkdirSync(dirname(targetPath), { recursive: true });
writeFileSync(targetPath, POEM);
