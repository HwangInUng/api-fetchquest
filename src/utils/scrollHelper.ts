import { SetterOrUpdater } from 'recoil';

export const onMoveToScroll = (targetId: string) => {
  const target = document.getElementById(targetId);
  target?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

export const selectMethodByScroll = (
  container: HTMLDivElement,
  setMethod: SetterOrUpdater<string>,
) => {
  const scrollPosition = container.scrollTop + container.offsetTop;
  const children = Array.from(container.children);

  for (const child of children) {
    const div = child as HTMLDivElement;
    const divTop = div.offsetTop;
    const divBottom = divTop + div.offsetHeight;

    if (scrollPosition >= divTop && scrollPosition < divBottom) {
      setMethod(div.id);
    }
  }
};
