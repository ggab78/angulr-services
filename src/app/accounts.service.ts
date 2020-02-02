export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(newName: string, newStatus: string) {
    this.accounts.push({name: newName, status: newStatus});
  }

  changeStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
