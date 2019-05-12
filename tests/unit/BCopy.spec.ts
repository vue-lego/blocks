import { shallowMount } from '@vue/test-utils';
import BCopy from '@/components/BCopy.vue';

describe('BCopy.vue', () => {
  it('renders a .b-copy span wrapper element', () => {
    const content = 'test content';
    const wrapper = shallowMount(BCopy, {
      propsData: { content }
    });
    expect(wrapper.contains('span.b-copy')).toBe(true);
  });
  it('renders a button by default with the Copy as button text', () => {
    const content = 'test content';
    const wrapper = shallowMount(BCopy, {
      propsData: { content }
    });
    expect(wrapper.contains('.b-copy > button')).toBe(true);
  });
  it('renders a custom button when provided via default slot', () => {
    const content = 'test content';
    const wrapper = shallowMount(BCopy, {
      propsData: { content },
      slots: {
        default: `<button class='my-button'></button>`
      }
    });
    expect(wrapper.contains('.b-copy > .my-button')).toBe(true);
  });
  it('should call the onCopy method on button click', () => {
    const content = 'test content';
    const onCopy = jest.fn();
    const wrapper = shallowMount(BCopy, {
      propsData: { content },
      methods: { onCopy }
    });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(onCopy).toHaveBeenCalled();
  });
  it('should emit a copy event upon button click', () => {
    const content = 'test content';
    const wrapper = shallowMount(BCopy, {
      propsData: { content }
    });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.emitted().copy).toBeTruthy();
  });
});
