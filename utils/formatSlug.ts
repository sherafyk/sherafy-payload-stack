const NON_ALPHANUM = /[^a-z0-9]+/g;
const TRIM_HYPHEN = /(^-|-$)+/g;

export const formatSlug = (value: string): string => {
  return value
    .toLowerCase()
    .replace(NON_ALPHANUM, '-')
    .replace(TRIM_HYPHEN, '');
};
