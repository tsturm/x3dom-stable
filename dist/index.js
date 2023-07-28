import { log, error } from "./moduleA";
import { warn } from "./moduleB";
warn("bar");
error("blub");
log("foo");
warn("bar");
log("foo");
error("blub");
//# sourceMappingURL=index.js.map