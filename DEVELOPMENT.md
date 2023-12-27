# Development

## Setting Up 'models' Custom Post Type (CPT)

To incorporate 'models' CPT into the Faust.js project, follow the steps below:

### Creating 'models' CPT Templates

1. Create two new TypeScript React components under the `wp-templates` directory named `single-models.tsx` and `archive-models.tsx`. Refer to the corresponding [template documentation](https://faustjs.org/reference/template-system/) for detailed instructions on how to properly define these components.

### Registering Templates

1. In the `wp-templates/index.tsx` file, register the new templates by importing them and including them in the default exported object:

```tsx
import SingleModels from './single-models';
import ArchiveModels from './archive-models';

export default {
  // ...other imports
  'single-models': SingleModels,
  'archive-models': ArchiveModels,
  // ...other exports
};
```

### Updating Language File

1. To ensure any new text is properly displayed, update the `public/lang/en.ts` file to include the new strings used within the 'models' templates.

## Updating the ACM Blueprint Export

### Importing

1. Create a fresh site in Local or use the FakerPress plugin to wipe your current WordPress database to a fresh install.
2. Install and activate Atlas Content Modeler.
3. From the WP CLI, run `wp acm blueprint import <URL_TO_ZIP>`. You can use the GitHub RAW URL from the repo: https://github.com/wpengine/faust-scaffold/raw/main/acm-blueprint.zip

This will import the ACM Blueprint export into your WordPress database. Make any modifications as necessary.

### Exporting

1. Before exporting, make sure you have deleted any of the initial content that gets created upon a WordPress install (e.g. "Sample Page", "Hello World", any comments, etc.)
2. From the WP CLI, run `wp acm blueprint export --open --wp-options=category_base,permalink_structure,nav_menu_options,theme_mods_twentytwentytwo --post-types=nav_menu_item,post,page,testimonial,project`. This will export the site into the appropriate ACM Blueprint .zip, and also open the location where the .zip was saved. It will also export the Navigational Menus and the CPTs from the ACM models.
2. Replace the existing `acm-blueprint.zip` in the repo with the newly exported `acm-blueprint.zip` and make a PR with the changes.