package vn.com.trungtien.management.services;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.com.trungtien.management.domains.entities.Account;
import vn.com.trungtien.management.domains.entities.ProductItem;
import vn.com.trungtien.management.domains.entities.ShoppingCart;
import vn.com.trungtien.management.domains.entities.ShoppingCartItem;
import vn.com.trungtien.management.repositories.IProductItemRepository;
import vn.com.trungtien.management.repositories.IShoppingCartItemRepository;
import vn.com.trungtien.management.repositories.IShoppingCartRepository;
import vn.com.trungtien.management.services.dto.ShoppingCartDTO;
import vn.com.trungtien.management.services.dto.ShoppingCartItemDTO;
import vn.com.trungtien.management.services.mapper.ShoppingCartItemMapper;
import vn.com.trungtien.management.services.mapper.ShoppingCartMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ShoppingCartService {
    private final IShoppingCartRepository shoppingCartRepository;
    private final IShoppingCartItemRepository shoppingCartItemRepository;
    private final ShoppingCartItemMapper mapper;
    private final IProductItemRepository productItemRepository;

    public List<ShoppingCartItemDTO> listCartItems (Account account){
        ShoppingCart shoppingCart = shoppingCartRepository.findByAccount(account);

        List <ShoppingCartItem> shoppingCartItemList =  shoppingCartItemRepository.findByCartId(account.getCart().getId());
        return mapper.toDTOs(shoppingCartItemList);
    }

    public  Integer addProduct(Long productItemId, Integer qty, Account account){
        Integer addedQuantity = qty;

        ProductItem productItem = productItemRepository.findById(productItemId).get();

        ShoppingCart shoppingCart = shoppingCartRepository.findByAccount(account);




        ShoppingCartItem shoppingCartItem = shoppingCartItemRepository.findByCartAndProductItem( shoppingCart , productItem);

        if (shoppingCartItem !=null){
            addedQuantity = shoppingCartItem.getQty() + qty;
            shoppingCartItem.setQty(addedQuantity);
        } else {
            shoppingCartItem = new ShoppingCartItem();
            shoppingCartItem.setQty(qty);
            shoppingCartItem.setCart(shoppingCart);
            shoppingCartItem.setProductItem(productItem);
        }

        shoppingCartItemRepository.save(shoppingCartItem);

        return addedQuantity;




    }
}
