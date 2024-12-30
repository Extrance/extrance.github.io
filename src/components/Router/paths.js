export const BASE_PATH = "/";

export const BULLET = {
  WHOAMI: BASE_PATH + 'whoami',
  BRICKS: BASE_PATH + 'bricks',
  PUZZLES: BASE_PATH + 'puzzles',
  WISHLIST: BASE_PATH + 'wishlist',
};

export const ROUTE = {
  COLLECTION: 'collection',
  WISHLIST: 'wishlist',
}

export const CHILDREN = {
  BRICK_COLLECTION: BULLET.BRICKS+BASE_PATH+ROUTE.COLLECTION,
  BRICK_WISHLIST: BULLET.BRICKS+BASE_PATH+ROUTE.WISHLIST,
  PUZZLES_COLLECTION: BULLET.PUZZLES+BASE_PATH+ROUTE.COLLECTION,
  PUZZLES_WISHLIST: BULLET.PUZZLES+BASE_PATH+ROUTE.WISHLIST,
}