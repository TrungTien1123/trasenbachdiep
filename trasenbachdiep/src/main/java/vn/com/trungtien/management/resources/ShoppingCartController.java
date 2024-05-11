package vn.com.trungtien.management.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import vn.com.trungtien.management.domains.entities.Account;
import vn.com.trungtien.management.services.AccountService;
import vn.com.trungtien.management.services.ShoppingCartService;
import vn.com.trungtien.management.services.dto.ShoppingCartItemDTO;

import java.util.List;

@RestController
@RequestMapping("api/cart")
public class ShoppingCartController {
    @Autowired
    ShoppingCartService shoppingCartService;
    @Autowired
    AccountService accountService;

    @GetMapping("/{username}")
    public List<ShoppingCartItemDTO> getCartItems(@PathVariable("username") String username){
        Account account = accountService.getAccountInfoByUsername(username);
        return shoppingCartService.listCartItems(account);
    }
    @PostMapping("/add/{pid}/{qty}")
    public String addProductItemToCart(@PathVariable("pid") Long productItemId,
                                       @PathVariable("qty") Integer qty,
                                       @AuthenticationPrincipal Authentication authentication) {
        if (authentication == null || authentication instanceof AnonymousAuthenticationToken) {
            return "You must login to add this product to your shopping cart.";
        }
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        Account account = accountService.getAccountByUsername(username);
        Integer addedQty = shoppingCartService.addProduct(productItemId, qty, account);
        return addedQty + "item(s) of this product were added to shopping cart.";
    }
}
