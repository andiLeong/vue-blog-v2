<template>

    <ComponentLayout title="Grid Practice" class="mt-10 mb-20">

        <div>
            <h1>Example 1: grid column 2nd take double of the first fr<pre class="text-red-500">grid-template-columns: 1fr 2fr;</pre></h1>
            <section class="example-1 grid-container">
                <div>
                    <h2>Logo Design</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam recusandae.</p>
                </div>
                <div>
                    <h2>Graphic Design</h2>
                    <p>Corporis quaerat saepe iste id cupiditate perferendis fugiat sapiente natus totam?</p>
                </div>
                <div>
                    <h2>Branding</h2>
                    <p>Adipisci sequi sed velit deserunt asperiores, corporis quaerat saepe iste id.</p>
                </div>
                <div>
                    <h2>Photography</h2>
                    <p>Id cupiditate perferendis fugiat sapiente natus totam? Rerum, libero mollitia?</p>
                </div>
                <div>
                    <h2>Video Editing</h2>
                    <p>Corporis quaerat saepe iste id cupiditate perferendis fugiat sapiente natus totam?</p>
                </div>
                <div>
                    <h2>Web Design</h2>
                    <p>Adipisci sequi sed velit deserunt asperiores, corporis quaerat saepe iste id.</p>
                </div>
            </section>
        </div>

        <div>
            <h1>Example 2: first item take up much space as it can , pushing the 2nd item to the end
                <pre class="text-red-500">grid-template-columns: 1fr auto ;</pre>
            </h1>
            <section class="example-2 grid-container">
                <div class="item">
                    <h3>Veg Burger</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit atque hic eligendi.</p>
                </div>
                <div class="icon">🍔</div>
                <div class="item">
                    <h3>Tacos</h3>
                    <p>Quos sunt non labore ab dicta ea sequi error, sapiente asperiores quas.</p>
                </div>
                <div class="icon">🌮</div>
                <div class="item">
                    <h3>Classic Waffles</h3>
                    <p>Dolorem nesciunt minima reprehenderit natus nam ipsum ipsa, laudantium.</p>
                </div>
                <div class="icon">🧇</div>
            </section>
        </div>

        <div>
            <h1>Example 3: the 3rd item take 50% overall , the fist and second share the remaining 50%
                <pre class="text-red-500">grid-template-columns: 1fr 1fr 50% ;</pre>
            </h1>
            <section class="example-3 grid-container">
                <div>
                    <h2>Logo Design</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam recusandae.</p>
                </div>
                <div>
                    <h2>Graphic Design</h2>
                    <p>Corporis quaerat saepe iste id cupiditate perferendis fugiat sapiente natus totam?</p>
                </div>
                <div>
                    <h2>Branding</h2>
                    <p>Adipisci sequi sed velit deserunt asperiores, corporis quaerat saepe iste id.</p>
                </div>
                <div>
                    <h2>Photography</h2>
                    <p>Id cupiditate perferendis fugiat sapiente natus totam? Rerum, libero mollitia?</p>
                </div>
                <div>
                    <h2>Video Editing</h2>
                    <p>Corporis quaerat saepe iste id cupiditate perferendis fugiat sapiente natus totam?</p>
                </div>
                <div>
                    <h2>Web Design</h2>
                    <p>Adipisci sequi sed velit deserunt asperiores, corporis quaerat saepe iste id.</p>
                </div>
            </section>
        </div>

        <div>
            <h1>Example 4: image we have 3 section in a typical webpage header content and footer , and we want the content occupy as much space to push the footer always at the bottom , even content does not have enough content
                <pre class="text-red-500">grid-template-row: auto 1fr auto ; min-height: 100vh</pre>
            </h1>
            <section class="example-4">
                <a href="http://led.andiliang.com/" class="text-sky-500 underline">example 4</a>
            </section>
        </div>

        <div>
            <h1>Example 5: add space between row and column using gap , justify-content ,
                <pre class="text-red-500">grid-template-columns: repeat(4,auto);
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    justify-content: space-between;
    align-content: center;</pre>
            </h1>
            <section class="example-5 grid-container">
                <!-- Item 1 -->
                <img style="width:4.4rem;border-radius: 0.3rem" src="https://andiliang.sgp1.digitaloceanspaces.com/junsing/235DFE12-193D-4101-8181-BCD195A4361C.jpeg" alt="Tote Bag" />
                <div class="desc">
                    <h3>Stylish Tote Bag</h3>
                    <p>Brown Color Women's Tote Bag</p>
                    <span>#368798</span>
                </div>
                <div>Quantity : 1</div>
                <div class="price">$129.00</div>

                <!-- Item 2 -->
                <img style="width:4.4rem;border-radius: 0.3rem" src="https://andiliang.sgp1.digitaloceanspaces.com/junsing/F387748C-A9C7-4CC1-A1D0-81897749E2C4.jpeg" alt="Sunglasses" />
                <div class="desc">
                    <h3>Sunglasses</h3>
                    <p>Glasses with wooden frame</p>
                    <span>#756328</span>
                </div>
                <div>Quantity : 1</div>
                <div class="price">$142.00</div>
            </section>
        </div>

        <div>
            <h1>Example 6: center a div using justify-item and align-item</h1>
            <section class="example-6">
                <AppLink to="/components" class="text-sky-500 underline">example 6</AppLink>
            </section>
        </div>

        <div>
            <h1>Example 7: using align-self to align a specific grid item
                <pre class="text-red-500"> align-items: center; align-self: start;</pre>
            </h1>
            <section class="example-7 grid-container">
                <!-- Restaurant 1 -->
                <img style="width:4rem;height:4rem;object-fit: cover;display:block" src="https://andiliang.sgp1.digitaloceanspaces.com/junsing/F387748C-A9C7-4CC1-A1D0-81897749E2C4.jpeg" alt="Cheese & Grill Restaurant" />
                <div class="info">
                    <h3>Cheese & Grill Restaurant</h3>
                    <span>St. Marks Street</span>
                </div>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>

                <!-- Restaurant 2 -->
                <img style="width:4rem;height:4rem;object-fit: cover;display:block" src="https://andiliang.sgp1.digitaloceanspaces.com/junsing/F387748C-A9C7-4CC1-A1D0-81897749E2C4.jpeg" alt="Momo Magic" />
                <div class="info">
                    <h3>Momo Magic</h3>
                    <span>MG Road</span>
                </div>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </section>
        </div>

        <div>
            <h1>Example 8: another example using align-self and justify-self
                <pre class="text-red-500"></pre>
            </h1>
            <section class="example-8 grid-container">
                <h3 style="align-self: center">John Doe</h3>
                <img style="width: 2.6rem;height: 2.6rem;border-radius: 1.3rem;justify-self: end" src="https://andiliang.sgp1.digitaloceanspaces.com/junsing/F387748C-A9C7-4CC1-A1D0-81897749E2C4.jpeg" alt="Avatar" />
                <small style="align-self: end">+1 (234) 567-8900</small>
                <div style="justify-self: end">
                    <a href="#">
                        <i class="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </section>
        </div>


    </ComponentLayout>

</template>

<script setup>
import ComponentLayout from '@/components/ComponentLayout.vue'
import {onMounted} from "vue";

onMounted( () => {
    if (document.getElementById('font-awesome')) return; // was already loaded
    let scriptTag = document.createElement("link");
    scriptTag.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css";
    scriptTag.id = "font-awesome";
    scriptTag.rel = "stylesheet";
    document.getElementsByTagName('head')[0].appendChild(scriptTag);
})
</script>

<style scoped>
.grid-container {
    @apply space-y-3 my-4 bg-gray-700 px-2 py-3 text-white shadow-lg rounded;
}
.example-1 {
    display:grid;
    grid-template-columns: 1fr 2fr;
    /*grid-template-columns: 1fr 1fr 1fr;*/
}

.example-2 {
    display:grid;
    /*1fr will push to auto to the end*/
    grid-template-columns: 1fr auto ;
}

.example-3 {
    display:grid;
    grid-template-columns: 1fr 1fr 50% ;
}

.example-5 {
    height: 22rem;
    display:grid;
    grid-template-columns: repeat(4,auto);
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    justify-content: space-between;
    align-content: center;
}

.example-7 {
    max-width: 28rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 2rem 1rem;
    align-items: center;
}

.rating {
   align-self: start;
}

.example-8 {
    width:17rem;
    height:10rem;
    display: grid;
    grid-template-columns: repeat(2,auto);
    justify-content: space-between;
    align-content: space-between;
}
</style>