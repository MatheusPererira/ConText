import React, { useContext, useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'
import { CarContext } from './CarContext';

export default function CarInputComponent(){
    const { setCarros } = useContext(CarContext)
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')

    const addCarro = () => {
        if(marca && modelo){
            setCarros (prevCarros => [...prevCarros, {marca, modelo}])
            setMarca('')
            setModelo('')
        }    
        }
    

    return(
        <View>
            <TextInput value={marca}
            onChangeText={setMarca} 
            placeholder='Marca do Carro' />

            <TextInput value={modelo}
            onChangeText={setModelo}
            placeholder='Modelo do carro' />

            <Button title='Adicionar' onPress={addCarro} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }


})