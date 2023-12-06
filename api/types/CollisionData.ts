import { EntityCollidable } from "./World";

/**
 * Holds information of Collisions between entites, and determines whether or not the entities are on the map. Used in {@link SpawnEntityOptions.onCollision}.
 * This is similar to {@link OverlapData}, however only triggers when a collision stops entities from moving through eachother. Does not trigger on tiles that stop entities
 */
export interface CollisionData {
  /**
   * Array of Entities that have been collided with
   */
  entityCollidables: EntityCollidable[];
  /**
   * Is the collision on the world map as defined by the world boundaries?
   */
  map: boolean;
}
