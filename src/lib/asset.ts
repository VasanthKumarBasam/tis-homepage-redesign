/**
 * Official TIS media is served from tis.edu.in. Keeping the base URL in one place
 * means switching to self-hosted copies in /public is a one-line change.
 */
const TIS_MEDIA_BASE = 'https://tis.edu.in/_next/static/media/'

export const tisAsset = (file: string) => TIS_MEDIA_BASE + encodeURIComponent(file)
