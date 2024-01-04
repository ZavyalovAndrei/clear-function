export default function getHealthStatus(character) {
  let result = "wounded";
  if (character.health > 50) {
    result = "healthy";
  } else if (character.health < 15) {
    result = "critical";
  }
  return result;
}
