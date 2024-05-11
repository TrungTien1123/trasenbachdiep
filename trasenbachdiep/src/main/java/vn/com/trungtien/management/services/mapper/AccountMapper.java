package vn.com.trungtien.management.services.mapper;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import vn.com.trungtien.management.domains.entities.Account;
import vn.com.trungtien.management.services.dto.AccountDTO;

import java.util.List;

@Component
public class AccountMapper implements EntityMapper<Account,AccountDTO> {
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public AccountDTO toDTO(Account entity) {
        return modelMapper.map(entity, AccountDTO.class);
    }

    @Override
    public Account toEntity(AccountDTO dto) {
        return modelMapper.map(dto,Account.class);
    }

    @Override
    public List<AccountDTO> toDTOs(List<Account> entities) {
        return modelMapper.map(entities, new TypeToken<List<AccountDTO>>(){}.getType());
    }
    @Override
    public List<Account> toEntities(List<AccountDTO> dtos) {
        return modelMapper.map(dtos, new TypeToken<List<Account>>(){}.getType());
    }

}


