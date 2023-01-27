import React from 'react';
import { FlatList, Box, Text, Heading, HStack, VStack } from 'native-base';

export default function ListService(){
    const data = [
        {
            typeService: 'Batismo',
            ministration: {
                minOne: 'Elias Leonel',
                minTwo: 'Jair Ribeiro'
            },
            locality: 'Linha Tal',
            city: 'Pimenta Bueno',
            date: '01/01/2023',
            hour: '19:30'
        },
        {
            typeService: 'Batismo',
            ministration: {
                minOne: 'Elias Leonel',
                minTwo: 'Jair Ribeiro'
            },
            locality: 'Linha Tal',
            city: 'Pimenta Bueno',
            date: '01/01/2023',
            hour: '19:30'
        },
        {
            typeService: 'Batismo',
            ministration: {
                minOne: 'Elias Leonel',
                minTwo: 'Jair Ribeiro'
            },
            locality: 'Linha Tal',
            city: 'Pimenta Bueno',
            date: '01/01/2023',
            hour: '19:30'
        },
        {
            typeService: 'Batismo',
            ministration: {
                minOne: 'Elias Leonel',
                minTwo: 'Jair Ribeiro'
            },
            locality: 'Linha Tal',
            city: 'Pimenta Bueno',
            date: '01/01/2023',
            hour: '19:30'
        },
        {
            typeService: 'Batismo',
            ministration: {
                minOne: 'Elias Leonel',
                minTwo: 'Jair Ribeiro'
            },
            locality: 'Linha Tal',
            city: 'Pimenta Bueno',
            date: '01/01/2023',
            hour: '19:30'
        }, 
    ]
    return(
        <FlatList
        data={data}
        backgroundColor="#d4d9e2"
        renderItem={({item}) =>
            <Box
            style={{
                backgroundColor: '#033d60',
                height: 150,
                margin: 10,
                borderRadius: 10,
            }}>
                <Heading
                size="md"
                color="#d4d9e2"
                p="5" 
                bold={true}>
                    {item.typeService}
                </Heading>
                <HStack
                    justifyContent="flex-start"
                    ml="5">
                        <VStack w="200">
                                <Text 
                                size="lg" 
                                bold={true}
                                color="#d4d9e2">
                                    Ministério 1
                                </Text>
                                <Text 
                                size="md"
                                color="#d4d9e2">
                                    {item.ministration.minOne}
                                </Text>
                        </VStack>
                        <VStack w="200">
                                <Text 
                                size="lg" 
                                bold={true}
                                color="#d4d9e2">
                                    Ministério 2
                                </Text>
                                <Text 
                                size="md"
                                color="#d4d9e2">
                                    {item.ministration.minTwo}
                                </Text>
                        </VStack>
                </HStack>
            </Box>
    }/>
    )
}