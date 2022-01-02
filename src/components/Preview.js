import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import '../css/preview.css'


export default function Preview() {
    const state = useSelector(state => state.root.codeTabs);

    const srcDoc = useMemo(() => {
        if (!state.css && !state.js && !state.html)
            return false
        return `
         <!DOCTYPE html>
         <html lang="en">
         <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

         <style>
         ${state.css}
         </style>
         </head>
         <body>
         
         ${state.html}
     

         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
         <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
         <script>
         ${state.js}
         </script>
         </body>
         </html>
         `
    }, [state.css, state.html, state.js]);



    return (
        <div className=" w-[100%]  relative">
            { srcDoc && <iframe srcDoc={srcDoc}></iframe>  }
            { !srcDoc && <div className='pagePreview'>Write code..</div>  }
            
        </div>
    )
}