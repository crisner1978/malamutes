import BioText from "components/BioText";
import ContactLabel from "components/ContactLabel";

export default function About() {
  return (
    <div className="bg-gray-50">
      <BioText
        title="Snow Legend Malamutes"
        description="Our mission is to offer healthy, beautiful, well behaved and even
               tempered puppies. Our malamutes are a part of our family. They live
               in our home, snuggle next to us on the couch, and are not secluded
               to outdoor kennels."
        description1='We treasure our dogs and spoil them with love and affection daily.
               They are wonderful family pets! They adore our three children and
               enjoy playing with them. These gentle giants are stubborn but they
               are highly intelligent and easily trained with patience. They are
               "pack animals", (extremely loyal to the family) but require an owner
               who can serve as the "Alpha" role to earn their respect and offer
               the structure they thrive best in. Consistency with boundaries is
               the key. Otherwise, you will have a 100lb dog you cannot control.'
      />
      <ContactLabel />
    </div>
  );
}
