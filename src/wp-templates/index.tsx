import page from "./page";
import single from "./single";
import SingleModels from "./single-models";
import ArchiveModels from "./archive-models";
import category from "./category";
import tag from "./tag";
import main from "./main";
import archive from "./archive";

export default {
  // front page will a specifycally page
  page,
  single,
  category,
  tag,
  'single-models': SingleModels,
  'archive-models': ArchiveModels,
  index: main,
  archive,
};
