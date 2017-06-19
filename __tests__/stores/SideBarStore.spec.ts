import SideBarStore from '../../src/stores/SideBarStore';

test('initialzes to closed', () => {
    let store = new SideBarStore();

    expect(store.isOpen).toBeFalsy();
});

test('toggles isOpen', () => {
    let store = new SideBarStore();
    
    store.openSideMenu();
    expect(store.isOpen).toBeTruthy();
    store.closeSideMenu();
    expect(store.isOpen).toBeFalsy();
});