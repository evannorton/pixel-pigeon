import { CollisionData } from "./CollisionData";
import { OverlapData } from "./OverlapData";
import { Pathing } from "./Pathing";
import { TilePosition } from "./TilePosition";

/**
 * Stores information about Entity collisions.
 * Setting up collisions is done with {@link SpawnEntityOptions.onOverlap}.
 *
 * @remarks
 * If you set up collisions, the data in this interface is the data of the entity your are colliding with.
 * For example if you set up {@link SpawnEntityOptions.onOverlap | onOverlap} on a player entity,
 * any overlapData you recieve will be the data of entities the player has collided with, but will not include player collision data.
 */
export interface EntityCollidable {
  /**
   * String CollisionLayer that the collided entity is apart of
   */
  collisionLayer: string;
  /**
   * String entityID of the collided entity
   */
  entityID: string;
}
/**
 * A representation of where the entity is in the world
 */
export interface EntityPosition {
  /**
   * X position of the entity
   */
  x: number;
  /**
   * Y position of the entity
   */
  y: number;
}
export interface EntityQuadrilateral {
  quadrilateralID: string;
  x?: number;
  y?: number;
}
export interface Entity {
  readonly collidables: EntityCollidable[];
  readonly collisionLayer: string | null;
  readonly fieldValues: Map<string, unknown>;
  hasTouchedPathingStartingTile: boolean;
  readonly height: number;
  readonly id: string;
  lastPathedTilePosition: EntityPosition | null;
  readonly onCollision: ((data: CollisionData) => void) | null;
  readonly onOverlap: ((data: OverlapData) => void) | null;
  path: TilePosition[] | null;
  pathing: Pathing | null;
  position: EntityPosition;
  quadrilaterals: EntityQuadrilateral[];
  spriteInstanceID: string | null;
  readonly width: number;
  movementVelocity: {
    readonly x: number;
    readonly y: number;
  } | null;
  zIndex: number;
}
export interface Layer {
  readonly entities: Map<string, Entity>;
  readonly id: string;
  readonly tileSize: number;
  readonly tiles: {
    readonly id: number;
    readonly sourceX: number;
    readonly sourceY: number;
    readonly x: number;
    readonly y: number;
  }[];
  readonly tilesetID: string | null;
}
export interface Level {
  readonly height: number;
  readonly id: string;
  readonly layers: Layer[];
  readonly width: number;
}
export interface Tileset {
  readonly height: number;
  readonly imageSourceID: string;
  readonly tileSize: number;
  readonly tiles: WorldTilesetTile[];
  readonly width: number;
}
export interface WorldTilesetTile {
  readonly id: number;
  readonly isCollidable: boolean;
}
export interface World {
  readonly levels: Map<string, Level>;
  readonly tilesets: Map<string, Tileset>;
}
