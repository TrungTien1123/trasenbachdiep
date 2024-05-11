package vn.com.trungtien.management.domains.enums;

public enum AccountRole {
    ADMIN, CUSTOMER;
    public static AccountRole toEnum(String name) {
        for (AccountRole item : AccountRole.values()) {
            if (item.toString().equals(name))
                return item;
        }
        return null;
    }
}