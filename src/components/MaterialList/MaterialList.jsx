// import { Material } from '../Material/Material'

// export const MaterialList = ({ items, onDelete, onUpdate }) => {
//     return (<ul>
//         {items.map(item => (
//             <li key={item.id}>
//                 <Material item={items}
//                     onDelete={onDelete}
//                     onUpdate={onUpdate} />
//                 {/* мы можем объявить в пропсах onDelete и onUpdate как {items, ...otherProps}
//                  и распилылить в Material как {...otherProps}, тогда Material будет выглядеть как 
//                  <Material item={items} {...otherProps} />  */}
//             </li>
//         ))}
//     </ul>
//     )
// }

import { Material } from '../Material/Material';

export const MaterialList = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Material item={item} {...otherProps} />
          <hr />
        </li>
      ))}
    </ul>
  );
};