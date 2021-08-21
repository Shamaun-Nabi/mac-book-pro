document.getElementById("memroy_8gb").addEventListener("click", function () {
    const fixed_prize = 1299;
    const extra_memory_cost = document.getElementById("extra-memory-cost").innerText = "10";
    const extra_storage_cost_text=document.getElementById("extra-storage-cost").innerText;
    const extra_storage_cost=parseFloat(extra_storage_cost_text);
    const delivery_charge_text=document.getElementById("delivery-charge").innerText;
    const delivery_charge=parseFloat(delivery_charge_text);
    document.getElementById("total-price").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
    document.getElementById("total_price_last").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
})
document.getElementById("memroy_16gb").addEventListener("click", function () {
    const fixed_prize = 1299;
    const extra_memory_cost = document.getElementById("extra-memory-cost").innerText = "180";
    const extra_storage_cost_text=document.getElementById("extra-storage-cost").innerText;
    const extra_storage_cost=parseFloat(extra_storage_cost_text);
    const delivery_charge_text=document.getElementById("delivery-charge").innerText;
    const delivery_charge=parseFloat(delivery_charge_text);
    document.getElementById("total-price").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
    document.getElementById("total_price_last").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
})

// document.getElementById("memroy_16gb").addEventListener("click", function () {
//     const fixed_prize = 1299;
//     const extra_storage_cost_text=document.getElementById("extra-storage-cost").innerText;
//     const extra_storage_cost=parseFloat(extra_storage_cost_text);
//     const extra_memory_cost = document.getElementById("extra-memory-cost").innerText = 180;
//     document.getElementById("total-price").innerText = extra_memory_cost + fixed_prize+extra_storage_cost;
// })

// document.getElementById("ssd_256gb").addEventListener("click", function () {
//     const fixed_prize = 1299;
//     const memory_cost_here = document.getElementById("extra-memory-cost").innerText;
//     const memory_now = parseFloat(memory_cost_here);
//     const extra_storage = document.getElementById("extra-storage-cost").innerText = 0;
//     const total_price = fixed_prize + memory_now + extra_storage
//     document.getElementById("total-price").innerText = total_price;

// })
// document.getElementById("ssd_512gb").addEventListener("click", function () {
//     const fixed_prize = 1299;
//     const memory_cost_here = document.getElementById("extra-memory-cost").innerText;
//     const memory_now = parseFloat(memory_cost_here);
//     const extra_storage = document.getElementById("extra-storage-cost").innerText = 100;
//     const total_price = fixed_prize + memory_now + extra_storage
//     document.getElementById("total-price").innerText = total_price;

// })
// document.getElementById("ssd_1TB").addEventListener("click", function () {
//     const fixed_prize = 1299;
//     const memory_cost_here = document.getElementById("extra-memory-cost").innerText;
//     const memory_now = parseFloat(memory_cost_here);
//     const extra_storage = document.getElementById("extra-storage-cost").innerText = 180;
//     const total_price = fixed_prize + memory_now + extra_storage
//     document.getElementById("total-price").innerText = total_price;

// })

// document.getElementById("delivery-free").addEventListener("click", function () {
//     const fixed_prize = 1299;
//     const memory_cost_here = document.getElementById("extra-memory-cost").innerText;
//     const memory_now = parseFloat(memory_cost_here);
//     const storage_cost_here = document.getElementById("extra-storage-cost").innerText;
//     const storage_now = parseFloat(memory_cost_here);
//     const delivery = document.getElementById("delivery-charge").innerText =0;
//     const total_price = fixed_prize + memory_now + delivery+storage_now;
//     document.getElementById("total-price").innerText = total_price;

// })

// document.getElementById("delivery-crg").addEventListener("click", function () {
//     const fixed_prize = 1299;
//     const memory_cost_here = document.getElementById("extra-memory-cost").innerText;
//     const memory_now = parseFloat(memory_cost_here);
//     const extra_storage = document.getElementById("delivery-charge").innerText = 20;
//     const total_price = fixed_prize + memory_now + extra_storage
//     document.getElementById("total-price").innerText = total_price;

// })

document.getElementById("promo_button").addEventListener("click",function(){
    const promo_code=document.getElementById("promo-code").value;
    if(promo_code=="alamin"){
        const total_price_text=document.getElementById("total-price").innerText;
        const total_price=parseFloat(total_price_text);
        const discount=total_price-50;
        document.getElementById("total-price").innerText=discount;
    }
})