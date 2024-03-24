export default function truncatedDescription(desc, maxLength = 100) {
  if (desc.length > maxLength) {
    return desc?.substring(0, maxLength) + "...";
  }
  return desc;
}
