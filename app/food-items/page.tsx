import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  export default async function Index() {
    const supabase = createServerComponentClient({ cookies });

    const { data: foodItems } = await supabase.from("food_items").select();

    return (
      <><div>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

         
      </div><ul className="my-auto text-foreground">
          {foodItems?.map((food) => (
            <><div key={food.id}>{food.name}</div>
              <div>Purchase Date:</div>
              <li key={food.id}>{food.purchase_date.slice(0, 10)}</li>
              <div>Expiration date</div>
              <li key={food.id}>{food.expiration_date}</li>
            </>
          ))}
        </ul></>

      
    );
  }