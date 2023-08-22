  import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
  import { cookies } from "next/headers";

  export default async function Index() {
    const supabase = createServerComponentClient({ cookies });

    const { data: foodItems } = await supabase.from("food_items").select();

    return (
      <ul className="my-auto text-foreground">
        {foodItems?.map((food) => (
          <><div key={food.id}>{food.name}</div>
            <div>Purchase Date:</div>
            <li key={food.id}>{food.purchase_date.slice(0,10)}</li>
            <div>Expiration date</div>
            <li key = {food.id}>{food.expiration_date}</li>
          </>
        ))}
      </ul>
    );
  }