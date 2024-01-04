

export const increment=(inc)=>{
    return{
        type: 'INCREMENT',
        payload: inc
    }
}

export const decrement =()=>{
    return{
        type: 'DECREMENT'
    }
}

export const sign_in =()=>{
    return{
        type: 'SIGN_IN'
    }
}