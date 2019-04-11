import cache from "memory-cache";
import _ from "lodash";
export const PairedRoom = new cache.Cache();

export const WaitingRoom = new cache.Cache();

export function checkUserCache(senderId) {
  if (!_.isNull(WaitingRoom.get(senderId))) return 1;
  if (!_.isNull(PairedRoom.get(senderId))) return 2;
  return 0;
}
