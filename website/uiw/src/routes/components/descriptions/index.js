import { Descriptions, Divider, Badge, Radio, RadioGroup } from 'uiw';
import Markdown from '@/components/Markdown';

export default class Page extends Markdown {
  path =
    'https://github.com/uiwjs/uiw/tree/master/packages/react-descriptions/README.md';
  dependencies = { Descriptions, Divider, Badge, Radio, RadioGroup };
  async renderPage() {
    const md = await import(
      'uiw/node_modules/@uiw/react-descriptions/README.md'
    );
    return md.default || md;
  }
}
