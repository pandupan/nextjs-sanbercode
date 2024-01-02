import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Flex, Grid, Card, CardBody, CardFooter, CardHeader, GridItem, Heading, Text, Button, Box, Textarea, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const LayoutComponent = dynamic(() => import("@/Layout"));

export default function Notes() {
  const router = useRouter()
  const {id} = router?.query

  const [notes, setNotes] = useState({
    title:"",
    description:"",
    }
  )

  const HandleSubmit = async () => {
    try {
     const response = await fetch(
      `https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${id}`,
      {
       method: "PATCH", 
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify({title : notes?.title, description : notes?.description}),
      }
     );
     const result = await response.json();
     if (result?.success) {
      router.push("/notes");
     }
    } catch (error) {}
   };

   useEffect(()=>{
     async function fecthingData(){
       const res = await fetch(`https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`)
       const listNotes = await res.json()
    //    console.log(listNotes)
       setNotes(listNotes?.data)
     }
     fecthingData();
     
   }, [id])
 
//    console.log('id =>', id)


 return (
  <>
    <LayoutComponent metaTitle="Notes" metaDescription={"Ini adalah bagian Notes"}>
    <Card margin="5" padding="5">
    <Heading>Edit Notes</Heading>
     <Grid gap="5">
      <GridItem>
       <Text>Title</Text>
       <Input
        type="text"
        value={notes?.title}
        onChange={(event) =>
         setNotes({ ...notes, title: event.target.value })
        }
       />
     </GridItem>
     <GridItem>
      <Text>Description</Text>
       <Textarea
        value={notes?.description}
        onChange={(event) =>
         setNotes({ ...notes, description: event.target.value })
        }
      />
     </GridItem>
     <GridItem>
      <Button onClick={() => HandleSubmit()} colorScheme="blue">
       Submit
      </Button>
     </GridItem>
    </Grid>
   </Card>

    </LayoutComponent>
  </>
 );
}


