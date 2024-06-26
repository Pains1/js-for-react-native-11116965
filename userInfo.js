import { processArray } from "./arrayManipulation";
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
      id: index + 1,
      originalName: name,
      modifiedName: modifiedNames[index],
    }));
  }
  