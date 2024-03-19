const modal = document.querySelector(".modal")
const btn = document.querySelector(".fa-arrow-up")
const input = document.querySelector("#form input")
const left = document.querySelector(".result")

left.classList.add("delete")   
const selection = document.querySelectorAll(".modal div span")
let isCheck = false 

selection.forEach(item => {
    item.addEventListener("click", ()=>{
        modal.classList.toggle("hide")
        isCheck = true
        btn.classList.toggle("btnRound")
    })
});

btn.addEventListener("click", ()=>{
if (!isCheck) {
    alert("Iltimos bo'limlardan birini tanlang!")
} else {
    header.textContent = "Units Of Measure"
    modal.classList.toggle("hide")
    btn.classList.toggle("btnRound")
}
})

const header = document.querySelector(".logo") 
const refresh = document.querySelector(".fa-arrows-rotate")

refresh.addEventListener("click", ()=>{
    location.reload()
})

// Workspace >>


const length = document.querySelector("#length")
const weight = document.querySelector("#weight")
const liquid = document.querySelector("#liquid")
const data = document.querySelector("#data")
const time = document.querySelector("#time")
const speed = document.querySelector("#speed")
const temp = document.querySelector("#temperature")
const corner = document.querySelector("#angular")

const allSelects = document.querySelectorAll("#form select")
const add = document.querySelector("#addition")
const selectLength = document.querySelector("#selectLength")




let varImg = document.querySelector(".workImage")

//    1     part one
length.addEventListener("click", ()=>{
    header.textContent = "Uzunlik"
    selectLength.classList.remove("delete")
    selectTime.classList.add("delete")
    selectData.classList.add("delete")
    selectTemp.classList.add("delete")
    selectArea.classList.add("delete")
    selectSpeed.classList.add("delete")
    selectWeight.classList.add("delete")
    selectLiquid.classList.add("delete")
    varImg.src = "./images/length.jpg"
    input.value = ""
    add.textContent = "KM"
    input.addEventListener("input", ()=>{
        left.innerHTML = `
        <span> <p>${input.value * 1000}</p> <p>meter</p> </span>
        <span> <p>${input.value * 10000}</p> <p>decimeter</p> </span>
        <span> <p>${input.value * 100000}</p> <p>santimeter</p> </span>
        <span> <p>${input.value * 1000000}</p> <p>millimeter</p> </span>
        <span> <p>${(input.value * 0.6213711922).toFixed(2)}</p> <p>mil</p> </span>
        <span> <p>${input.value * 3280}</p> <p>fut</p></span>
        `
    })
    selectLength.addEventListener("change", ()=>{
        switch (selectLength.value) {
            case "Millimeter":
                input.value = ""
                add.textContent = "MM"
                input.addEventListener("input", ()=>{
                    left.innerHTML = `
                    <span> <p>${(input.value / 10).toFixed(2)}</p> <p>santimeter</p> </span>
                    <span> <p>${(input.value / 100).toFixed(2)}</p> <p>decimeter</p> </span>
                    <span> <p>${(input.value / 1000).toFixed(3  )}</p> <p>meter</p> </span>
                    <span> <p>${(input.value / 1000000).toFixed(4)}</p> <p>kilometer</p> </span>
                    `
                })
                break;
             case "Santimeter":
                add.textContent = "CM"
                input.addEventListener("input", ()=>{
                    left.innerHTML = `
                    <span> <p>${input.value * 10}</p> <p>millimeter</p> </span>
                    <span> <p>${(input.value / 10).toFixed(2)}</p> <p>decimeter</p> </span>
                    <span> <p>${(input.value / 100).toFixed(2)}</p> <p>meter</p> </span>
                    <span> <p>${(input.value / 100000).toFixed(3)}</p> <p>kilometer</p> </span>`
                })
                break;
            case "Meter":
                input.value = ""
                add.textContent = "M"
                input.addEventListener("input", ()=>{
                    left.innerHTML = `
                    <span> <p>${input.value * 1000}</p> <p>millimeter</p> </span>
                    <span> <p>${input.value * 100}</p> <p>santimeter</p> </span>
                    <span> <p>${(input.value / 10).toFixed(2)}</p> <p>decimeter</p> </span>
                    <span> <p>${(input.value / 1000).toFixed(2)}</p> <p>kilometer</p> </span>
                    <span> <p>${(input.value * 3.280839895).toFixed(2)}</p> <p>fut</p> </span>
                    <span> <p>${(input.value * 0.0006213712).toFixed(2)}</p> <p>mil</p> </span>
                    `
                })
            break;
            case "Kilometer":
                input.value = ""
                add.textContent = "KM"
                input.addEventListener("input", ()=>{
                    left.innerHTML = `
                    <span> <p>${input.value * 1000}</p> <p>meter</p> </span>
                    <span> <p>${input.value * 10000}</p> <p>decimeter</p> </span>
                    <span> <p>${input.value * 100000}</p> <p>santimeter</p> </span>
                    <span> <p>${input.value * 1000000}</p> <p>millimeter</p> </span>
                    <span> <p>${(input.value * 0.6213711922).toFixed(2)}</p> <p>mil</p> </span>
                    <span> <p>${input.value * 3280}</p> <p>fut</p> </span>
                    `
                })
                break;
                case "Mil":
                    input.value= ""
                    add.textContent = "MI"
                    input.addEventListener("input", ()=>{
                    left.innerHTML = `
                    <span> <p>${input.value * 1609344}</p> <p>millimeter</p> </span>
                    <span> <p>${(input.value * 160934.4).toFixed(2)}</p> <p>santimeter</p> </span>
                    <span> <p>${(input.value * 1609.344).toFixed(2)}</p> <p>meter</p> </span>
                    <span> <p>${(input.value * 1.609344).toFixed(2)}</p> <p>kilometer</p> </span>
                    <span> <p>${input.value * 5280}</p> <p>fut</p> </span>
                        `
                    })
                    break;
                case "Fut":
                    input.value = ""
                    add.textContent = "FT"
                    input.addEventListener("input", ()=>{
                    left.innerHTML = `
                    <span> <p>${(input.value * 304.8).toFixed(2)}</p> <p>millimeter</p> </span>
                    <span> <p>${(input.value * 30.48).toFixed(2)}</p> <p>santimeter</p> </span>
                    <span> <p>${(input.value * 0.3048).toFixed(2)}</p> <p>meter</p> </span>
                    <span> <p>${(input.value * 0.0003048).toFixed(2)}</p> <p>kilometer</p> </span>
                    <span> <p>${(input.value * 0.0001893939).toFixed(2)}</p> <p>mil</p> </span>
                        `
                    }) 
                    break;
            default: 
                break;
        }
    } )

})
//    2     part two

const selectWeight = document.querySelector("#selectWeight")

weight.addEventListener("click", ()=>{
    header.textContent = "Og'rilik"
    selectWeight.classList.remove("delete")
    selectTime.classList.add("delete")
    selectLength.classList.add("delete")
    selectLiquid.classList.add("delete")
    selectArea.classList.add("delete")
    selectTemp.classList.add("delete")
    selectSpeed.classList.add("delete")
    selectData.classList.add("delete")
    varImg.src = "./images/weight.jpg"
        input.value = ""
        add.textContent = "KG"
        input.addEventListener("input", ()=>{
           left.innerHTML = `
           <span> <p>${input.value * 1000000}</p> <p>milligram</p> </span>
           <span> <p>${input.value * 1000} </p> <p>gramm</p> </span>
           <span> <p>${(input.value * 0.001).toFixed(2)}</p> <p>tonna</p> </span>
           <span> <p>${(input.value * 2.204688681).toFixed(2)}</p> <p>funt</p> </span>
           ` 
        })
selectWeight.addEventListener("change", ()=>{
    switch (selectWeight.value) {
        case "Gramm":
            input.value = ""
            add.textContent = "G"
            input.addEventListener("input", ()=>{
               left.innerHTML = `
               <span> <p>${input.value * 1000}</p> <p>milligramm</p> </span>
               <span> <p>${(input.value * 0.001).toFixed(2)}</p> <p>kilogramm</p> </span>
               <span> <p>${(input.value * 0.000001).toFixed(2)}</p> <p>tonna</p> </span>
               <span> <p>${(input.value * 0.0022046226).toFixed(2)}</p> <p>funt</p> </span>

               ` 
            })
            break;

            case "Kilogramm":
                input.value = ""
                add.textContent = "KG"
                input.addEventListener("input", ()=>{
                   left.innerHTML = `
             <span> <p>${input.value * 1000000}</p> <p>milligramm</p> </span>
             <span> <p>${input.value * 1000}</p> <p>gramm</p> </span>
             <span> <p>${(input.value * 0.001).toFixed(2)}</p> <p>tonna</p> </span>
             <span> <p>${(input.value * 2.204688681).toFixed(2)}</p> <p>funt</p> </span>

                   ` 
                })
                break;
                case "Tonna":
                    input.value = ""
                    add.textContent = "T"
                    input.addEventListener("input", ()=>{
                       left.innerHTML = `
                    <span> <p>${input.value * 1000000000} </p> <p>milligramm</p> </span>
                    <span> <p>${input.value * 1000000}</p> <p>gramm</p> </span>
                    <span> <p>${input.value * 1000}</p> <p>kilogramm</p> </span>
                    <span> <p>${(input.value * 2204.6226218488).toFixed(2)}</p> <p>funt</p> </span>
                       ` 
                    }) 
                    break;
                    case "Funt":
                        input.value = ""
                        add.textContent = "IB"
                        input.addEventListener("input", ()=>{
                           left.innerHTML = `
        <span> <p>${(input.value * 453.59237000).toFixed(2)}</p> <p>milligramm</p> </span>
        <span> <p>${(input.value * 453.59237).toFixed(2)}</p> <p>gramm</p> </span>
        <span> <p>${(input.value * 0.45359237).toFixed(2)}</p> <p>kilogramm</p> </span>
        <span> <p>${(input.value * 0.0004535924).toFixed(2)}</p> <p>tonna</p> </span>` 
                        })    
                        break;
                    default:
            break;
    }
})
    
})
//    3

const selectLiquid = document.querySelector("#selectLiquid")

liquid.addEventListener("click", ()=>{
    header.textContent = "Suyuqlik"
    selectTime.classList.add("delete")
    selectTemp.classList.add("delete")
    selectArea.classList.add("delete")
    selectLength.classList.add("delete")
    selectSpeed.classList.add("delete")
    selectWeight.classList.add("delete")
    selectData.classList.add("delete")
    selectLiquid.classList.remove("delete")
    varImg.src = "./images/water.jpg"
    input.value = ""
    add.textContent = "L"
    input.addEventListener('input', ()=>{
        left.innerHTML = `
        <span> <p>${input.value * 1000}</p> <p>millilitr</p> </span>
        <span> <p>${input.value * 10}</p> <p>dezilitr</p> </span>
        <span> <p>${(input.value / 100).toFixed(2)}</p> <p>hektolitr</p> </span>
        <span> <p>${(input.value / 1000).toFixed(2)}</p> <p>metr kub</p> </span>

        ` 
    })
    selectLiquid.addEventListener("change", ()=>{
        switch (selectLiquid.value) {
            case "Litr":
                input.value = ""
                add.textContent = "Litr"
                input.addEventListener('input', ()=>{
                    left.innerHTML = `
            <span> <p>${input.value * 1000}</p> <p>millilitr</p> </span>
            <span> <p>${input.value * 10}</p> <p>dezilitr</p> </span>
            <span> <p>${(input.value / 100).toFixed(2)}</p> <p>hektolitr</p> </span>
            <span> <p>${(input.value / 1000).toFixed(2)}</p> <p>metr kub</p> </span>
                    ` 
                })
                break;
                case "Millilitr":
                    input.value = ""
                    add.textContent = "ML"
                    input.addEventListener('input', ()=>{
                        left.innerHTML = `
                <span> <p>${(input.value / 1000).toFixed(2)}</p> <p>litr</p> </span>
                <span> <p>${(input.value / 10).toFixed(2)}</p> <p>dezilitr</p> </span>
                <span> <p>${(input.value / 100).toFixed(2)}</p> <p>hektolitr</p> </span>
                <span> <p>${(input.value / 1000).toFixed(2)}</p> <p> metr kub</p> </span>` 
                    })
                    break;      
                    case "Metrkub":
                        input.value = ""
                        add.textContent = "M³"
                        input.addEventListener('input', ()=>{
                            left.innerHTML = `
                <span> <p>${input.value * 1000}</p> <p>litr</p> </span>
                <span> <p>${(input.value / 1000000).toFixed(2)}</p> <p>millilitr</p> </span>
                <span> <p>${input.value * 10000}</p> <p>dezilitr</p> </span>
                <span> <p>${input.value * 100000}</p> <p>hektolitr</p> </span>
                            ` 
                        })
                        break;
            default:
                break;
        }
    })
})
//    4     part four

const selectData = document.querySelector("#selectData")

data.addEventListener("click", ()=>{
    selectLength.classList.add("delete")
    selectWeight.classList.add("delete")
    selectTemp.classList.add("delete")
    selectTime.classList.add("delete")
    selectSpeed.classList.add("delete")
    selectLiquid.classList.add("delete")
    selectArea.classList.add("delete")
    selectData.classList.remove("delete")
    header.textContent = "Ma'lumot o'lchovi"
    varImg.src = "./images/data.jpg"
    input.value = ""
    add.textContent = "MB"
    input.addEventListener('input', ()=>{
        left.innerHTML = `
        <span> <p>${input.value * 1048576}</p> <p>byte</p> </span>
        <span> <p>${input.value * 1024}</p> <p>kilobyte</p> </span>
        <span> <p>${(input.value / 1024).toFixed(2)}</p> <p>gigabyte</p> </span>
        <span> <p>${(input.value / 1024000).toFixed(2) }</p> <p>terabyte</p> </span>

        ` })
selectData.addEventListener("change", ()=>{
    switch(selectData.value){
        case "Baytlar":
            input.value = ""
            add.textContent = "B"
            input.addEventListener('input', ()=>{
                left.innerHTML = `
                <span> <p>${(input.value / 1024).toFixed(2)}</p> <p>kilobyte</p> </span>
                <span> <p>${(input.value / 1024000).toFixed(2)}</p> <p>megabyte</p> </span>
                <span> <p>${(input.value / 1024000000).toFixed(4)}</p> <p>gigabyte</p> </span>` 
            })
            break;
            case "Kilobaytlar":
                input.value = ""
                add.textContent = "KB"
                input.addEventListener('input', ()=>{
                    left.innerHTML = `
               <span> <p>${input.value * 1024}</p> <p>byte</p> </span>
               <span> <p>${(input.value / 1024).toFixed(2)}</p> <p>megabyte</p> </span>
               <span> <p>${(input.value / 1024000).toFixed(3)}</p> <p>gigabyte</p> </span>
                    ` 
                })
                break;
                case "Megabaytlar":
                    input.value = ""
                    add.textContent = "MB"
                    input.addEventListener('input', ()=>{
                        left.textContent = ""
                        left.innerHTML = `
            <span> <p>${input.value * 1024000}</p> <p>byte</p> </span>
            <span> <p>${input.value * 1024}</p> <p>kilobyte</p> </span>
            <span> <p>${(input.value / 1024).toFixed(3)}</p> <p>gigabyte</p> </span>
            <span> <p>${(input.value / 1024000).toFixed(4)}</p> <p>terabyte</p> </span>` 
                    })
                    break;
                case "Gigabaytlar":
                    input.value = ""
                    add.innerHTML = "GB"
                    input.addEventListener('input', ()=>{
                        left.innerHTML = `
        <span> <p>${input.value * 1024000}</p> <p>kilobyte</p> </span>
        <span> <p>${input.value * 1024}</p> <p>megabyte</p> </span>
        <span> <p>${(input.value / 1024).toFixed(2)}</p> <p>terabyte</p> </span>
                        ` 
                        })
                break;
                case "Terabaytlar":
                    input.value = ""
                    add.innerHTML = "TB"
                    input.addEventListener('input', ()=>{
                        left.innerHTML = `
                <span> <p>${input.value * 1024000000}</p> <p>kilobyte</p> </span>
                <span> <p>${input.value * 1024000}</p> <p>megabyte</p> </span>
                <span> <p>${input.value * 1024}</p> <p>gigabyte</p> </span>
                        ` 
                        })
                break;
        default: 
        break;
    }
})
    
})

//   5   part five

const selectTime = document.querySelector("#selectTime")

time.addEventListener("click", ()=>{
    selectLength.classList.add("delete")
    selectWeight.classList.add("delete")
    selectTemp.classList.add("delete")
    selectArea.classList.add("delete")
    selectLiquid.classList.add("delete")
    selectSpeed.classList.add("delete")
    selectData.classList.add("delete")
    selectTime.classList.remove("delete")
    varImg.src = "./images/time.jpg"
    header.textContent = "Vaqt"
    input.value = ""
    add.textContent = "S"
    input.addEventListener("input", ()=>{
       left.innerHTML = `
       <span> <p>${input.value * 1000}</p> <p>milliseconds</p> </span>
       <span> <p>${(input.value / 60).toFixed(2)}</p> <p>minutes</p> </span>
       <span> <p>${(input.value * 0.0002777778).toFixed(2)} </p> <p>hours</p> </span>
       `
    })
selectTime.addEventListener("change", ()=>{
    switch (selectTime.value) {
        case "Millisecond":
            input.value = ""
            add.textContent = "MS"
            input.addEventListener("input", ()=>{
               left.innerHTML = `     
        <span> <p>${(input.value / 1000).toFixed(2)}</p> <p>second</p> </span>
        <span> <p>${(input.value * 0.0000166667).toFixed(2)}</p> <p>minute</p> </span>

               `
            })
            break;
        case "Second":
            input.value = ""
            add.textContent = "S"
            input.addEventListener("input", ()=>{
               left.innerHTML = `
      <span> <p>${input.value * 1000}</p> <p>millisecond</p> </span>
      <span> <p>${input.value / 60}</p> <p>minute</p> </span>
      <span> <p>${(input.value * 0.0002777778).toFixed(4)} </p> <p>hour</p> </span>`
            })
        break;
        case "Minute":
            input.value = ""
            add.textContent = "Min"
            input.addEventListener("input", ()=>{
                left.innerHTML = `
        <span> <p>${input.value * 60000}</p> <p>millisecond</p> </span>
        <span> <p>${input.value * 60}</p> <p>second</p> </span>
        <span> <p>${(input.value * 0.0166666667).toFixed(4)}</p> <p>hour</p> </span>
        <span> <p>${(input.value * 0.0006944444).toFixed(4)}</p> <p>days</p> </span>`
            })
        break;
        case "Hour":
            input.value = ""
            add.textContent = "S"
            input.addEventListener("input", ()=>{
               left.innerHTML = `
       <span> <p>${input.value * 3600}</p> <p>second</p> </span>
       <span> <p>${input.value * 60}</p> <p>minute</p> </span>
       <span> <p>${(input.value * 0.0416666667).toFixed(2)}</p> <p>hour</p> </span>
       <span> <p>${(input.value * 0.005952381).toFixed(2)}</p> <p>week</p> </span>`
            })
            break;
        case "Day":
               input.value = ""
               add.textContent = "D"
               input.addEventListener("input", ()=>{
                  left.innerHTML = `
          <span> <p>${input.value * 86400000}</p> <p>millisecond</p> </span>
          <span> <p>${input.value * 86400}</p> <p>second</p> </span>
          <span> <p>${input.value * 1440} </p> <p>minute</p> </span>
          <span> <p>${input.value * 24}</p> <p>hour</p> </span>
          <span> <p>${(input.value * 0.1428571429).toFixed(2)}<p> <p>week</p> </span>`
               })
        break;
        case "Week":
            input.value = ""
            add.textContent = "WK"
            input.addEventListener("input", ()=>{
               left.innerHTML = `
        <span> <p>${input.value * 604800}</p> <p>second</p> </span>
        <span> <p>${input.value * 10080}</p> <p>minute</p> </span>
        <span> <p>${input.value * 168}</p> <p>hour</p> </span>
        <span> <p>${input.value * 7}</p> <p>day</p> </span>`
            })
        break;
        default:
            break;
    }
})
})

const selectSpeed = document.querySelector("#selectSpeed")

speed.addEventListener("click", ()=>{
    selectLength.classList.add("delete")
    selectWeight.classList.add("delete")   
    selectTemp.classList.add("delete")
    selectLiquid.classList.add("delete")
    selectData.classList.add("delete")
    selectArea.classList.add("delete")
    selectTime.classList.add("delete")
    selectSpeed.classList.remove("delete")
    header.textContent = "Tezlik"
    varImg.src = "./images/speed.jpeg"
    input.value = ''
    add.textContent = "m/s"
    input.addEventListener("input", ()=>{
        left.innerHTML = `
        <span><p>${input.value * 3600} </p><p>metr/soat</p> </span>
        <span><p>${(input.value * 0.001).toFixed(2)}</p><p>km/sekund</p> </span>
        <span><p>${(input.value * 3.6).toFixed(2)}</p><p>km/soat</p> </span>
        <span><p>${(input.value * 3.280839895).toFixed(2)}</p>fut/sekund<p></p> </span>
        <span><p>${(input.value * 0.0006213712).toFixed(2)}</p>mil/sekund<p></p> </span>`    
    })
selectSpeed.addEventListener("change", ()=>{
    switch(selectSpeed.value){
        case "Metr/sec":
            input.value = ''
            add.textContent = "m/s"
            input.addEventListener("input", ()=>{
                left.innerHTML = `
        <span> <p>${input.value * 3600} </p> <p>metr/soat</p> </span>
        <span> <p>${(input.value * 0.001).toFixed(2)}</p> <p>km/sekund</p> </span>
        <span> <p>${(input.value * 3.6).toFixed(2)}</p> <p> km/soat</p> </span>
        <span> <p>${(input.value * 3.280839895).toFixed(2)} </p> <p>fut/sekund</p> </span>
        <span> <p>${(input.value * 0.0006213712).toFixed(2)}</p> <p>mil/sekund</p> </span>`    
            })         
        break;
        case "Metr/soat":
            input.value = ''
            add.textContent = "m/h"
            input.addEventListener("input", ()=>{
                left.innerHTML = `
            <span> <p>${(input.value * 0.0002777778).toFixed(2)}</p> <p>metr/sec</p> </span>
            <span> <p>${(input.value * 0.001).toFixed(2)}</p> <p>km/soat</p> </span>
            <span> <p>${(input.value * 0.0009113444).toFixed(2)}</p> <p>fut/sekund</p> </span>
            <span> <p>${(input.value * 0.000213712).toFixed(2)}</p> <p>mil/soat</p> </span>
                `    
            })
            break;
0
        case "KM/sec":
            add.textContent = "KM/s"
            input.addEventListener("input", ()=>{
                left.innerHTML = `
        <span> <p>${input.value * 1000}</p> <p>metr/sekund</p> </span>
        <span> <p>${input.value * 3600}</p> <p>km/sekund</p> </span>
        <span> <p>${(input.value * 3280.8398951331).toFixed(2)}</p> <p>fut/sekund</p> </span>
        <span> <p>${(input.value * 0.6213711922).toFixed(2)}</p> <p>mil/sekund</p> </span>
                `    
            })
            break;
        case "KM/soat":
        add.textContent = "KM/h"
        input.addEventListener("input", ()=>{
            left.innerHTML = `
            <span> <p>${(input.value * 0.7777778).toFixed(2)}</p> <p>metr/sekund</p> </span>
            <span> <p>${(input.value * 0.0002777778).toFixed(2)}</p> <p>km/sekund</p> </span>
            <span> <p>${(input.value * 0.9113444153).toFixed(2)}</p> <p>fut/sekund</p> </span>
            <span> <p>${(input.value * 0.0001726031).toFixed(2)}</p> <p>mil/sekund</p> </span>
            `    
        })
        break;
        case "Fut/sec":
            input.value = ""
            add.textContent = "Ft/s"
            input.addEventListener("input", ()=>{
                left.innerHTML = `
            <span> <p>${(input.value * 0.3048).toFixed(2)}</p> <p>metr/sekund</p> </span>
            <span> <p>${(input.value * 1097.28).toFixed(2)}</p> <p>m/soat</p> </span>
            <span> <p>${(input.value * 0.0003048).toFixed(2)}</p> <p>km/sekund</p> </span>
            <span> <p>${(input.value * 1.09728).toFixed(2)}</p> <p>km/soat</p> </span>
            <span> <p>${(input.value * 0.0001893939).toFixed(2)}</p> <p>mil/sekund</p> </span>
                `    
            }) 
        break;      
        case "Mil/sec":
        input.value = ""
        add.textContent = "mi/s"
        input.addEventListener("input", ()=>{
            left.innerHTML = `
            <span> <p>${(input.value * 1609.344).toFixed(2)}</p> <p>metr/sekund</p> </span>
            <span> <p>${(input.value * 5793638.4).toFixed(2)}</p> <p> m/soat</p> </span>
            <span> <p>${(input.value * 1.609344).toFixed(2)}</p> <p>km/sekund</p> </span>
            <span> <p>${(input.value * 5793.6384).toFixed(2)}</p> <p>km/soat</p> </span>
            <span> <p>${input.value * 5280}</p> <p>fut/sekund</p> </span>
            `    
        }) 
    break;
        default: 
         break;
    }
})
})

const selectTemp = document.querySelector("#selectTemp")


temp.addEventListener("click", ()=>{

    selectLength.classList.add("delete")
    selectWeight.classList.add("delete")   
    selectLiquid.classList.add("delete")
    selectArea.classList.add("delete")
    selectData.classList.add("delete")
    selectTime.classList.add("delete")
    selectSpeed.classList.add("delete")
    selectTemp.classList.remove("delete")
    varImg.src = "./images/temp.jpg"
    header.textContent = "Harorat"

    input.value = ''
    add.textContent = "°C"

    input.addEventListener("input", ()=>{
        left.innerHTML = `
        <span> <p>${(input.value * 9/5+32).toFixed(2)} </p> <p>Frangeyt (&deg; F)</p> </span>
        <span> <p>${(Number(input.value) + 273.15).toFixed(2) } </p> <p>Kelvin</p> </span>
        `
    })
  selectTemp.addEventListener("change", ()=>{  
    switch (selectTemp.value) {
    case "Selsiy":
        input.value = ''
        add.textContent = "°C"
    
        input.addEventListener("input", ()=>{
            left.innerHTML = `
            <span> <p>${(input.value * 9/5 + 32).toFixed(2)} </p> <p>Frangeyt (&deg; F)</p> </span>
            <span> <p>${(Number(input.value) + 273.15 ).toFixed(2)} </p> <p>Kelvin</p> </span>
            `
        })
        break;
            case "Frangeyt":
                input.value = ''
                add.textContent = "°F"
            
                input.addEventListener("input", ()=>{
                    left.innerHTML = `
                    <span> <p>${((input.value - 32) * (5/9)).toFixed(2)} </p> <p>Selsiy (&deg; C)</p> </span>
                    <span> <p>${((input.value - 32) * (5/9) + 273.15 ).toFixed(2) } </p> <p>Kelvin</p> </span>
                    `  })
            break;
            case "Kelvin":
                input.value = ""
                add.textContent = "K"
                input.addEventListener("input", ()=>{
                    left.innerHTML  = `
                    <span> <p>${(input.value - 273.15).toFixed(2)} </p> <p>Selsiy</p> </span>
                    <span> <p>${((Number(input.value) - 273.15) * (9/5) + 32 ).toFixed(2)} </p> <p>Frangeyt</p> </span>
                        
                        ` 
                })
    default:
        break;
}})
    })

const selectArea = document.querySelector("#selectArea")

corner.addEventListener("click", ()=>{
    selectLength.classList.add("delete")
    selectWeight.classList.add("delete")   
    selectTemp.classList.add("delete")
    selectLiquid.classList.add("delete")
    selectData.classList.add("delete")
    selectTime.classList.add("delete")
    selectSpeed.classList.add("delete")
    selectArea.classList.remove("delete")
    header.textContent = "Hudud"
    varImg.src = "./images/area.png"


    input.value = ""
    add.textContent = "sq cm"
input.addEventListener("input", ()=>{
    left.innerHTML = `
    <span> <p>${input.value * 100} </p> <p>Square millimeters</p> </span>
    <span> <p>${(input.value  / 10000).toFixed(2)} </p> <p>Square meters</p> </span>
    <span> <p>${(input.value  / 10000000).toFixed(2)} </p> <p>Hectares</p> </span>
    <span> <p>${(input.value  / 100000000).toFixed(2)} </p> <p>Square meters</p> </span>
    `
})

selectArea.addEventListener("change", ()=>{
    switch (selectArea.value) {
        case "square":
            input.value  = ""
            add.textContent = "sq mm"
            input.addEventListener("input", ()=>{
                left.innerHTML = `
                <span> <p>${(input.value / 100).toFixed(2)} </p> <p>Square cantimeters</p> </span>
                <span> <p>${(input.value  / 100000).toFixed(2)} </p> <p>Sqaure meters</p> </span>
                `
            })
            break;
            case "centimeters":
                input.value = ""
                add.textContent = "sq cm"
            input.addEventListener(input, ()=>{
                left.innerHTML = `
                <span> <p>${input.value * 100} </p> <p>Square millimeters</p> </span>
                <span> <p>${(input.value  / 10000).toFixed(2)} </p> <p>Square meters</p> </span>
                <span> <p>${(input.value  / 10000000).toFixed(2)} </p> <p>Hectares</p> </span>
                <span> <p>${(input.value  / 100000000).toFixed(2)} </p> <p>Square meters</p> </span>
                `
            })
            break;

            case "sqMeters":
                input.value = ""
                add.textContent = "sq m"
                input.addEventListener("input", ()=>{
                    left.innerHTML = `
                <span> <p>${input.value * 1000000 }</p> <p>Sqare millimeters</p> </span>
                <span> <p>${input.value * 10000 } </p> <p>Square cantimeters</p> </span>
                <span> <p>${(input.value / 1000).toFixed(2) } </p> <p>Hectares</p> </span>
                <span> <p>${(input.value / 100000).toFixed(2) } </p> <p>Square kilometers</p> </span>
                `
                })
                break;
            case "hacters":
                input.value = ""
                add.textContent = "hc"
            input.addEventListener("input", ()=>{
                left.innerHTML = `
                <span> <p>${input.value * 10000} </p> <p>Square meters</p> </span>
                <span> <p>${(input.value * 0.01).toFixed(2)} </p> <p>Square meters</p> </span>
                `
            })
                break;
            case "sqKilometers":
                input.value = ""
                add.textContent = "sq km"
            input.addEventListener("input", ()=>{
                left.innerHTML = `
                <span> <p>${input.value * 1000000} </p> <p>Square meters</p> </span>
                <span> <p>${input.value * 100} </p> <p>Hectares</p> </span>
                ` 
            })
                break;
        default:
            break;
    }
})

})


input.addEventListener("input", ()=>{
    if(!input.value){
        left.classList.add("delete")
    }else{
        left.classList.remove("delete")
    }
})

allSelects.forEach(item =>{
    item.addEventListener("change", ()=>{
        left.classList.add("delete")
    })
})

const cards = document.querySelectorAll(".cards_container span")
const bgImage = document.querySelector(".background_img")


const selectElement = document.querySelector("#navSelect")
selectElement.addEventListener("change", ()=>{
    console.log(selectElement.value)
    window.location.href = selectElement.value
})







const navBg = document.querySelector(".navBg")

// header.addEventListener("mouseover", ()=>{
    // navBg.classList.remove("navTop")
    // })
    // header.addEventListener("mouseout", ()=>{
        //     navBg.classList.add("navTop")
        // })
