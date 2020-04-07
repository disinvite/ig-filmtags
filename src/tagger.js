const PART1 = "#35mmfilm #filmphotography #film #filmisnotdead #analog ";
const PART2 = "#staybrokeshootfilm #buyfilmnotmegapixels #filmcommunity #filmfeed #analogphotography #thefilmcommunity #film #analogue #shootfilm #keepfilmalive #back2thebase";

const whichTags = {
  "gold200"   : "#kodak #kodakgold #kodakgold200",
  "portra400" : "#kodak #kodakportra400 #portra400 #portra",
  "c200"      : "#fuji #fujifilm #fujic200 #fujicolorc200",
  "trix"      : "#kodak #kodaktrix #kodaktri400 #trix400",
  "hp5"       : "#ilford #ilfordhp5 #hp5",

  "canonet"   : "#canon #canonet #ql17",
  "pentax"    : "#pentax #pentaxk1000 #k1000",
  "lca"       : "#lomo #lomolca #lomography",
  "af2"       : "#minolta #minoltaf2 #lomography"
}

const dots = (n = 5) => '\n' + '.\n'.repeat(n);
const tag35 = (yes) => yes ? ' #35mm' : '';
const getTag = (tag) => tag in whichTags ? whichTags[tag] + ' ' : '';
const getComment = (comment) => comment.trim().length > 0 ? comment : '';

export function tagger(data) { 
  return `${getComment(data.comment)}${tag35(data.thirtyfive)}${dots()}${PART1}${getTag(data.camera)}${getTag(data.film)}${PART2}`;
}


