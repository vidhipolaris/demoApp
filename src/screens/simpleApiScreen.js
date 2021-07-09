// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// export default App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => setData(json.movies))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList 
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Text style={{margin:8,backgroundColor:'skyblue'}}>{item.title} 
//             {item.releaseYear}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://ec2-3-129-11-5.us-east-2.compute.amazonaws.com/location')
      .then((response) => response.json())
      .then((json) => setData(json.countries))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.name}</Text>
          )}
        />
      )}
    </View>
  );
};

