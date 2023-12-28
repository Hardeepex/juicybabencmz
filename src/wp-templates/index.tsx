import page from "./page";
import single from "./single";
import category from "./category";
import tag from "./tag";
import main from "./main";
import SingleModel from './single-models';
import ArchiveModels from './archive-models';
import archive from "./archive";

export default {
  // front page will a specifycally page
  page,
  single,
  category,
  tag,
  index: main,
  archive,
  'single-models': SingleModel,
  'archive-models': ArchiveModels,
};
