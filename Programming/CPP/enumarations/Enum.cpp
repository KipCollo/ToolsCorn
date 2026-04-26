#include<iostream>

enum paymentMethod{
    MPESA,
    KCB,
    EQUITY
};

int main(){

    // paymentMethod paymentMethod = KCB;

    std::cout << "Payment method: " << paymentMethod::EQUITY << std::endl;

    return 0;
}