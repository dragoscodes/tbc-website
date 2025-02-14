import { Text } from "@/app/components/text";
import { Button } from "../components/button";
import { Ticket } from "../components/ticket";

const Tickets = () => {
  return (
    <section className="w-full" id="tickets">
      <div className="flex w-full justify-center items-center">
        <Text textType={"sub_hero"} className="text-gradient">
          Tickets
        </Text>
      </div>
      <div className="w-full flex justify-center">
        <div className="sm:flex mt-20 justify-center sm:space-x-10 space-y-10 sm:space-y-0 w-[175px] sm:w-full">
          <Ticket price={12} ticketType={"student"} title="Student" />
          <Ticket price={120} ticketType={"regular"} title="Regular" />
          <Ticket price={400} ticketType={"vip"} title="VIP" />
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <Button buttonType={"cta"} asChild>
          <a
            href={
              "https://www.eventbrite.de/e/tum-blockchain-conference-24-tickets-922315539607"
            }
          >
            Buy Ticket
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Tickets;
