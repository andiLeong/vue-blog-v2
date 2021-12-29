let UUID = 5000;

export default function UniqueID() {
  const getID = () => {
    UUID++;
    return UUID;
  };

  return {
    getID,
  };
}
