![DeepIndex](https://raw.githubusercontent.com/deepindex/deepindex.github.io/master/images/splash.png)

This is the [GitHub Pages](https://pages.github.com/) repository for [deepindex.org](https://deepindex.org).

## Adding new examples

To propose a new example for inclusion on the site, first create an entry for it in [links.yml](https://github.com/deepindex/deepindex.github.io/blob/master/_data/links.yml).

The data is stored in [YAML](https://yaml.org/start.html) format, and each entry requires the following fields:

- `title`: How the example will be listed on the site
- `url`: Link to a supporting paper, article or case study
- `cat`: Code to assign a category (see the [available options](https://github.com/deepindex/deepindex.github.io/blob/master/_data/cats.yml))
- `status`: Choose from "wins", "does" or "near"
- `date`: Datestamp for the supporting link, in the format YYYY-MM-DD

To help avoid duplicates please do a [quick check](https://deepindex.org) to make sure your example isn't already listed before you submit it! 😊

Once you're done send us a pull request and we'll review it ASAP.

## Questions?

Email: [hello@deepindex.org](mailto:hello@deepindex.org).