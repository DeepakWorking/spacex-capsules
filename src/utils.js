
export const createSelectMenuItem = (data, key)=>{
    if(!data)return []
   return data.filter ((value, index, self)=>self.findIndex((item)=> item[key] === value[key]) === index).map((item)=>{
        return {
            label : convertCamelCase(item[key]) ,
            value : item[key]
        }
    })
}

export const convertCamelCase = (str)=>str.charAt(0).toUpperCase() + str.substring(1)

export const filterData = ({
    data,
    filterByStatus,
    filterByType
}) => {
   return data.filter((item)=>filterByKey(item, 'status', filterByStatus) && filterByKey(item, 'type', filterByType))
}

const filterByKey = (data, key, val)=> !val || data[key] === val

export const sortDataByDate = (data,sortBy)=>{
    if(!sortBy)return data;
    let sortedData = data.sort((a, b)=>{
        return new Date(b.original_launch).getTime() - new Date(a.original_launch).getTime()
    })
    if(sortBy === 'newest'){
        return sortedData
    }else{
        return sortedData.reverse()
    }
}